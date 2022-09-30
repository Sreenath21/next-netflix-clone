import { stat } from "fs";
import { RootState } from "../app/store";

export const getShowModal = (state: RootState): boolean => state.modal.modal;
