"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _react = require("@storybook/react");

var _stories = _interopRequireDefault(require("./stories"));

// @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
var s = (0, _react.storiesOf)('Base/Resizable');

_stories["default"].forEach(function (story) {
  return s.add(story.name, story.content);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL3Jlc2l6YWJsZS9zdG9yeWJvb2sudHMiXSwibmFtZXMiOlsicyIsInN0b3JpZXMiLCJmb3JFYWNoIiwic3RvcnkiLCJhZGQiLCJuYW1lIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUVBO0FBQ0EsSUFBTUEsQ0FBQyxHQUFHLHNCQUFVLGdCQUFWLENBQVY7O0FBQ0FDLG9CQUFRQyxPQUFSLENBQWdCLFVBQUNDLEtBQUQ7QUFBQSxTQUFXSCxDQUFDLENBQUNJLEdBQUYsQ0FBTUQsS0FBSyxDQUFDRSxJQUFaLEVBQWtCRixLQUFLLENBQUNHLE9BQXhCLENBQVg7QUFBQSxDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IHN0b3JpZXMgZnJvbSAnLi9zdG9yaWVzJztcblxuLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI1NTQpIEZJWE1FOiBFeHBlY3RlZCAyIGFyZ3VtZW50cywgYnV0IGdvdCAxLlxuY29uc3QgcyA9IHN0b3JpZXNPZignQmFzZS9SZXNpemFibGUnKTtcbnN0b3JpZXMuZm9yRWFjaCgoc3RvcnkpID0+IHMuYWRkKHN0b3J5Lm5hbWUsIHN0b3J5LmNvbnRlbnQpKTtcbiJdfQ==