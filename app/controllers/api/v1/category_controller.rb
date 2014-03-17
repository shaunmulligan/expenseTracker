class Api::V1::CategoryController < Api::V1::BaseController
  before_filter :authenticate_user!

  def index 
    respond_with(current_user.categories)
  end

  def show
    @data = current_user.categories.find(params[:id]).to_json()
    respond_with(@data)
  end

  def update 
    @data = current_user.categories.find(params[:id])
    respond_to do |format|
      if @data.update_attributes(categroy_params)
        format.json { head :no_content }
      else
        format.json { render json: @data.errors, status: :unprocessable_entity }
      end
    end
  end

  def create
    @data = current_user.categories.create(category_params)
    @data.save
    respond_with(@data)
  end

  def destroy
    @data = current_user.categories.find(params[:id])
    @data.destroy
    respond_to do |format|
      format.json  { head :ok }
    end
  end

  private

  def category_params
    params.require(:category).permit(:secure)
  end
end

