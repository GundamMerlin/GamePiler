class BacklogsController < ApiController
  before_action :set_backlog, only: %i[show update destroy]
  before_action :authenticate_user!, only: :index
  # GET /backlogs
  def index
    render json: current_user.backlogs, include: %i[console game]
  end

  # GET /backlogs/1
  def show
    if @backlog.user == current_user
      render json: @backlog, include: %i[console game]
    else
      render json: 'Unauthorized'
    end
  end

  # POST /backlogs
  def create
    @backlog = Backlog.new(backlog_params)
    @backlog.user = current_user
    if @backlog.save
      render json: @backlog, status: :created, location: @backlog
    else
      render json: @backlog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /backlogs/1
  def update
    if @backlog.user == current_user
      if @backlog.update(backlog_params)
        render json: @backlog
      else
        render json: @backlog.errors, status: :unprocessable_entity
      end
    else
      render status: 401
    end
  end

  # DELETE /backlogs/1
  def destroy
    @backlog.destroy if @backlog.user == current_user
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
