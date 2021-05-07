class AddImgToConsole < ActiveRecord::Migration[6.1]
  def change
    add_column :consoles, :console_img, :string
  end
end
