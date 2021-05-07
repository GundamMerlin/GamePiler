class CreateBacklogs < ActiveRecord::Migration[6.1]
  def change
    create_table :backlogs do |t|
      t.references :user, null: false, foreign_key: true
      t.references :game, null: false, foreign_key: true
      t.references :console, null: false, foreign_key: true
      t.boolean :done

      t.timestamps
    end
  end
end
