class UsersController < ApplicationController

 # GET /users
 def index
    users = User.all
    render json: users, status: :ok
end

# GET /users/:id
def show
    user = User.find(id: params[:id])
    if user
        render json: user, status: :ok
    else
        render json: {error: "User not found"}, status: :not_found
    end
end

# POST /users
def create
    user = User.create(user_params)
    render json: user, status: :created
end

# PATCH /users/:id
def update
    user = User.find(id: params[:id])
    if user
        user.update(user_params)
        render json: user, status: :updated
    else
        render json: {error: "User not found"}, status: :not_found
    end
end

# DELETE /user/:id
def destroy
    user = User.find(id: params[:id])
    if user
        user.destroy
        head :no_content
    else
        render json: {error: "User not found"}, status: :not_found
    end
end

private

def user_params
    params.permit(:first_name, :last_name, :email, :password)
end

end
