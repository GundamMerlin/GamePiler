class Backlog < ApplicationRecord
  belongs_to :user
  belongs_to :game
  belongs_to :console
end
