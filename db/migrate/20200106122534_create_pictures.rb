# frozen_string_literal: true

class CreatePictures < ActiveRecord::Migration[6.0]
  def change
    create_table :pictures do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
