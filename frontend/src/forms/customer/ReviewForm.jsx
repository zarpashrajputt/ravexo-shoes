// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for review field validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewAxiosFunction } from "../api.jsx";

// Define validation rules for product reviews.
const reviewSchema = z.object({
  // Require an order ID between 1 and 50 characters.
  reviewOrderId: z.string().min(1, "Order ID is required").max(50, "Order ID must be at most 50 characters"),
  // Require a product name between 2 and 100 characters.
  reviewProduct: z.string().min(1, "Product name is required").min(2, "Product name must be at least 2 characters").max(100, "Product name must be at most 100 characters"),
  // Require a whole-number rating from 1 to 5.
  reviewRating: z.number().int("Rating must be a whole number").min(1, "Please select a rating from 1 to 5").max(5, "Please select a rating from 1 to 5"),
  // Require a review comment between 10 and 1000 characters.
  reviewComment: z.string().min(1, "Comment is required").min(10, "Comment must be at least 10 characters").max(1000, "Comment must be at most 1000 characters"),
});

// Define the form customers use to review a purchased product.
function ReviewForm() {
  // Connect the review schema and empty rating to the form.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(reviewSchema),
  });
  
  async function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
    await addProductAxiosFunction(data);

  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              <h4 className="text-center mb-4">Write a Review</h4>
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="mb-3">
                  <label htmlFor="reviewOrderId" className="form-label">Order ID</label>
                  <input type="text" className="form-control form-control-lg" id="reviewOrderId" {...register("reviewOrderId")} />
                  {errors.reviewOrderId && <span className="text-danger">{errors.reviewOrderId.message}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="reviewProduct" className="form-label">Product Name</label>
                  <input type="text" className="form-control form-control-lg" id="reviewProduct" {...register("reviewProduct")} />
                  {errors.reviewProduct && <span className="text-danger">{errors.reviewProduct.message}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="reviewRating" className="form-label">Rating</label>
                  <select className="form-select form-select-lg" id="reviewRating" {...register("reviewRating", { valueAsNumber: true })}>
                    <option value="" disabled>Select a rating</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                  {errors.reviewRating && <span className="text-danger">{errors.reviewRating.message}</span>}
                </div>
                <div className="mb-4">
                  <label htmlFor="reviewComment" className="form-label">Comment</label>
                  <textarea className="form-control form-control-lg" id="reviewComment" rows="4" {...register("reviewComment")} />
                  {errors.reviewComment && <span className="text-danger">{errors.reviewComment.message}</span>}
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Submit Review</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;