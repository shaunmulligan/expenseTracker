class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :title
      t.integer :color_id
      t.string :icon
      t.boolean :custom

      t.timestamps
    end
  end
end
