class Costume < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :price, presence: true
    validates :description, presence: true
    validates :image, presence: true
    validates :link, presence: true
end
