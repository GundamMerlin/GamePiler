require "test_helper"

class BacklogsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @backlog = backlogs(:one)
  end

  test "should get index" do
    get backlogs_url, as: :json
    assert_response :success
  end

  test "should create backlog" do
    assert_difference('Backlog.count') do
      post backlogs_url, params: { backlog: { console_id: @backlog.console_id, done: @backlog.done, game_id: @backlog.game_id, user_id: @backlog.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show backlog" do
    get backlog_url(@backlog), as: :json
    assert_response :success
  end

  test "should update backlog" do
    patch backlog_url(@backlog), params: { backlog: { console_id: @backlog.console_id, done: @backlog.done, game_id: @backlog.game_id, user_id: @backlog.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy backlog" do
    assert_difference('Backlog.count', -1) do
      delete backlog_url(@backlog), as: :json
    end

    assert_response 204
  end
end
