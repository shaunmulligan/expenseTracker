class Api::V1::RecordController < Api::V1::BaseController
  before_filter :authenticate_user!

  def index 
    respond_with(current_user.records)
  end

  def show
    @data = current_user.records.find(params[:id]).to_json()
    respond_with(@data)
  end

  def update 
    @data = current_user.records.find(params[:id])
    respond_to do |format|
      if @data.update_attributes(record_params)
        format.json { head :no_content }
      else
        format.json { render json: @data.errors, status: :unprocessable_entity }
      end
    end
  end

  def create
    data = current_user.records.create(record_params)
    data.save
    respond_with(data)
  end

  def destroy
    @data = current_user.find(params[:id])
    @data.destroy
    respond_to do |format|
      format.json  { head :ok }
    end
  end

  private

  def record_params
    params.require(:record).permit(:secure, :data)
  end
end
