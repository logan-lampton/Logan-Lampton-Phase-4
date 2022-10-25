class CreateCostumes < ActiveRecord::Migration[7.0]
  def change
    create_table :costumes do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.string :image
      t.string :link

      t.timestamps
    end
  end
end
