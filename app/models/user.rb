class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :costumes, through: :reviews
end
