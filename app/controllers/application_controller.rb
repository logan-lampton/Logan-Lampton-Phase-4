class ApplicationController < ActionController::API
    include ActionController::Cookies

    # before_action 
    before_action :authorized_user
    skip_before_action :authorized_user, only: [:current_user]

    # current_user and authorized_user 
    def current_user
        user = User.find_by(id: session[:user_id])
        user
    end 

    def authorized_user  
        render json: { error: "Not authorized" }, status: :unauthorized unless current_user
    end

end
