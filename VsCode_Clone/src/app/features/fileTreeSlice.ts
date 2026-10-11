import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFileTree } from "../../interfaces";

interface IFocusedFile {
  fileName: string;
  content: string;
}

interface IInitialState {
  openedFiles: IFileTree[];
  focusedFile: IFocusedFile | null;
}

const initialState: IInitialState = {
  openedFiles: [],
  focusedFile: null,
};

const fileTreeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFileTree>) => {
      const { fileName, content } = action.payload;

      const fileExists = state.openedFiles.some(
        (file) => file.fileName === fileName
      );
      if (!fileExists) {
        state.openedFiles.push(action.payload);
      }

      state.focusedFile = { fileName, content: content ?? "" };
    },

    setFocusedFile: (state, action: PayloadAction<IFocusedFile>) => {
      state.focusedFile = action.payload;
    },

    closeFile: (state, action: PayloadAction<string>) => {
      const fileName = action.payload;
      const index = state.openedFiles.findIndex((f) => f.fileName === fileName);
      if (index === -1) return;

      state.openedFiles.splice(index, 1);

      if (state.focusedFile?.fileName === fileName) {
        const next = state.openedFiles[index] ?? state.openedFiles[index - 1];
        state.focusedFile = next? { fileName: next.fileName, content: next.content ?? "" }: null;
      }
    },
    closeAllFiles: (state) => {
      state.openedFiles = [];
      state.focusedFile = null;
    },
  },
});

export const { setOpenedFiles, setFocusedFile, closeFile, closeAllFiles } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;