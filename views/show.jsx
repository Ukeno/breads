const React = require('react')
const Default = require('./layouts/Default')

function Show({ bread, index }) {
  // console.log(bread.name)
  return (
    <Default>
      <h3>{bread.name}</h3>
      <p>
        and it
        {
          bread.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
        }
        have gluten.
      </p>
      <img src={bread.image} alt={bread.name} />
      <p>{bread.getBakedBy()}</p>
      <div className="edit">
        <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
      </div>
      <br />
      <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
        <div className="delete">
          <input type='submit' value="DELETE" />
        </div>
      </form>
      <div className="showButton">
        <a href="/breads"><button>Go back to the index</button></a>
      </div>
    </Default>
  )
  RTCRtpSender
}

module.exports = Show
