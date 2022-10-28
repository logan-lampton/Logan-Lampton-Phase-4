class CostumesController < ApplicationController

    # GET /costumes
    def index
        costumes = Costume.all
        render json: costumes, status: :ok
    end

    # GET /costumes/:id
    def show
        costume = Costume.find_by(id: params[:id])
        if costume
            render json: costume, status: :ok
        else
            render json: {error: "Costume not found"}, status: :not_found
        end
    end

    # POST /costumes
    def create
        costume = Costume.create!(costume_params)
        if costume.valid?
            render json: costume, status: :created
        else
            render json: {errors: costume.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # PATCH /costumes/:id
    def update
        costume = Costume.find_by(id: params[:id])
        if costume
            costume.update(costume_params)
            if costume.valid?
                render json: costume, status: :ok
            else
                render json: {errors: costume.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {error: "Costume not found"}, status: :not_found
        end
    end

    # DELETE /costume/:id
    def destroy
        costume = Costume.find_by(id: params[:id])
        if costume
            costume.destroy
            render json: {}, status: :no_content
        else
            render json: {error: "Costume not found"}, status: :not_found
        end
    end

    private

    def costume_params
        params.permit(:name, :price, :description, :image, :link)
    end

end
