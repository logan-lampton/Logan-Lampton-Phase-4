class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :costumes, through: :reviews

    has_secure_password
    # validates :password, confirmation: true
    # validates :password_confirmation, presence: true

end
