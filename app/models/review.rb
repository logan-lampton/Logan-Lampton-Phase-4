class Review < ApplicationRecord
    belongs_to :user
    belongs_to :costume

    validates :rating, presence: true
end
