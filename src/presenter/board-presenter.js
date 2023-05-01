import { render, RenderPosition } from '../render.js';
import SortView from '../view/sort-view.js';
import FormEditView from '../view/form-edit.js';
import WaypointView from '../view/waypoint-view.js';

export default class BoarderPresenter {

  constructor ({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init () {
    render(new SortView, this.boardContainer, RenderPosition.AFTERBEGIN);
    render(new FormEditView, this.boardContainer, RenderPosition.BEFOREEND);

    for (let i = 0; i < 3; i++) {
      render (new WaypointView, this.boardContainer, RenderPosition.BEFOREEND);
    }
  }
}
