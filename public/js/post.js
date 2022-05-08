const newCommentHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector('input[name="post-id"]').value;
  const comment = document.querySelector("#post-comment").value.trim();

  if (comment) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete post");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);

document
  .querySelector(".comment-list")
  .addEventListener("click", delButtonHandler);
