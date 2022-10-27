class ReviewsController < ApplicationController
    
    # GET /reviews
    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end
    
    # GET /review/:id
    def show
        review = Review.find_by(id: params[:id])
        if review
            render json: review, status: :ok
        else
            render json: {error: "Review not found"}, status: :not_found
        end
    end
    
    # POST /reviews
    def create
        review = Review.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end
    
    # PATCH /reviews/:id
    def update
        review = Reviews.find_by(id: params[:id])
        if review
            review.update(review_params)
            if review.valid?
                render json: review, status: :ok
            else
                render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {error: "Review not found"}, status: :not_found
        end
    end
    
    # DELETE /review/:id
    def destroy
        review = Review.find_by(id: params[:id])
        if review
            review.destroy
            head :no_content
        else
            render json: {error: "Review not found"}, status: :not_found
        end
    end
    
    private
    
    def review_params
        params.permit(:rating, :written_review, :user_id, :costume_id)
    end
    
end
