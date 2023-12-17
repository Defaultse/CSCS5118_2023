import Axios from "axios";
import React, {
  FormEvent,
  ReactElement,
  useEffect,
  useReducer,
  useState,
} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "./Comment";
import "./LotDetail.css";

export enum Actions {
  ADD_COMMENT,
  DELETE_COMMENT,
}

export interface CommentI {
  id: number;
  author: string;
  description: string;
}

export interface Action {
  type: Actions;
  payload: any;
}

function reducer(comments: CommentI[], action: Action) {
  switch (action.type) {
    case Actions.ADD_COMMENT:
      return [...comments, addComment(action.payload.description)];
    case Actions.DELETE_COMMENT:
      return comments.filter((comment) => comment.id !== action.payload.id);
    default:
      return comments;
  }
}

function addComment(description: string): CommentI {
  const account = JSON.parse(localStorage.getItem("account") || "{}");
  return { id: Date.now(), description, author: account.email };
}

export default function LotDetail({ match }): ReactElement {
  const [productDetails, setProductDetails] = useState<any>({
    id: '',
    seller_id: '',
    title: "",
    price: 0,
    description: "",
    category: "Category A",
  });
  const [comments, dispatch] = useReducer(reducer, []);
  const [description, setDescription] = useState("");
  const account = JSON.parse(localStorage.getItem("account") || "{}");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/api/product/${match.params.id}/`)
      .then((response) => {
        setProductDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [match.params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const addToFav = () => {
    var old = JSON.parse(localStorage.getItem("favorites") || "{}");
    old.push(productDetails.id);
    localStorage.setItem("favorites", JSON.stringify(old));
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // payload: account.id
    e.preventDefault();
    dispatch({
      type: Actions.ADD_COMMENT,
      payload: { description: description },
    });
    setDescription("");
  }

  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <img src="/images/demo.jpg" style={{ width: "100%" }} />
          </li>
          <li className="list-group-item">
            <h1>Title: {productDetails.name}</h1>
            <p>Price: {productDetails.price}KZT</p>
          </li>
          <li className="list-group-item">
            <p>Description:{productDetails.description}</p>
            <p>Contacts of owner: {productDetails.seller_id}</p>
            <button className="btn btn-primary" onClick={addToFav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bookmark-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                ></path>
              </svg>
              Add to Favorite
            </button>
          </li>
        </ul>
      </div>

      <br />

      <div className="mb-3">
        <h5>
          <strong>Comment section:</strong>
        </h5>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        {comments.map((comment) => {
          return (
            <Comment key={comment.id} comment={comment} dispatch={dispatch} />
          );
        })}
        <hr />

        {/* fake comment */}
        <em>123123123</em>
        <h5>anakin@mail.ru</h5>
        <p>I am not able to contact you.</p>
      </div>
    </>
  );
}
