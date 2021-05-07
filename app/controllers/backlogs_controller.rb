class BacklogsController < ApiController
  before_action :set_backlog, only: %i[show update destroy]

  # GET /backlogs
  def index
    @backlogs = Backlog.all

    render json: @backlogs
  end

  # GET /backlogs/1
  def show
    render json: @backlog
  end

  # POST /backlogs
  def create
    @backlog = Backlog.new(backlog_params)

    if @backlog.save
      render json: @backlog, status: :created, location: @backlog
    else
      render json: @backlog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /backlogs/1
  def update
    if @backlog.update(backlog_params)
      render json: @backlog
    else
      render json: @backlog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /backlogs/1
  def destroy
    @backlog.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_backlog
    @backlog = Backlog.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def backlog_params
    params.require(:backlog).permit(:user_id, :game_id, :console_id, :done)
  end
end
