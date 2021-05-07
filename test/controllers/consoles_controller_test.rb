require "test_helper"

class ConsolesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @console = consoles(:one)
  end

  test "should get index" do
    get consoles_url, as: :json
    assert_response :success
  end

  test "should create console" do
    assert_difference('Console.count') do
      post consoles_url, params: { console: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show console" do
    get console_url(@console), as: :json
    assert_response :success
  end

  test "should update console" do
    patch console_url(@console), params: { console: {  } }, as: :json
    assert_response 200
  end

  test "should destroy console" do
    assert_difference('Console.count', -1) do
      delete console_url(@console), as: :json
    end

    assert_response 204
  end
end
