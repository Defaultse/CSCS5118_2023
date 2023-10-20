import React, { Dispatch, ReactElement } from "react";
import { Action, Actions, CommentI } from "./LotDetail";

interface Props {
  comment: CommentI;
  dispatch: Dispatch<Action>;
}

export default function Comment({ comment, dispatch }: Props): ReactElement {
  return (
    <div>
      <em>{comment.id}</em>
      <h5>{comment.author}</h5>
      <p>{comment.description}</p>

      <button
        onClick={(e) =>
          dispatch({
            type: Actions.DELETE_COMMENT,
            payload: { id: comment.id },
          })
        }
      >
        Delete
      </button>
    </div>
  );
}
