class CostumesController < ApplicationController

    # GET /costumes
    def index
        costumes = Costume.all
        render json: costumes, status: :ok
    end

    # GET /costumes/:id
    def show
        costume = Costume.find(id: params[:id])
        if costume
            render json: costume, status: :ok
        else
            render json: {error: "Costume not found"}, status: :not_found
        end
    end

    # POST /costumes
    def create
        costume = Costume.create(costume_params)
        render json: costume, status: :created
    end

    # PATCH /costumes/:id
    def update
        costume = Costume.find(id: params[:id])
        if costume
            costume.update(costume_params)
            render json: costume, status: :updated
        else
            render json: {error: "Costume not found"}, status: :not_found
        end
    end

    # DELETE /costume/:id
    def destroy
        costume = Costume.find(id: params[:id])
        if costume
            costume.destroy
            head :no_content
        else
            render json: {error: "Costume not found"}, status: :not_found
        end
    end

    private

    def costume_params
        params.permit(:name, :price, :description, :image, :link)
    end

end
