const newCommentHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector('input[name="post-id"]').value;
  const comment = document
    .querySelector('textarea[name="post-comment"]')
    .value.trim();

  if (comment && post_id) {
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

// delete Post button
const delButtonHandler = async function () {
  await fetch(`/api/post/${post_id}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#comment-form")
  .addEventListener("submit", newCommentHandler);
