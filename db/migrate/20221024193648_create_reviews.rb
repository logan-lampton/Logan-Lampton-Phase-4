class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :written_review
      t.integer :user_id
      t.integer :costume_id

      t.timestamps
    end
  end
end
