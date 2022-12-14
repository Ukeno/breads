const React = require('react')
const Default = require('./layouts/Default')

function Show({ baker }) {
    return (
        <Default>
            <h3>{baker.name}</h3>
            <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
            <p>About {baker.name}: {baker.bio}</p>
            <h4>Breads {baker.name} has baked</h4>
            <ul>
                {
                    baker.breads.map((bread) => {
                        return (
                            <li key={bread.id}>
                                {bread.name}
                            </li>
                        )
                    })
                }
            </ul>
            <form action={`/bakers/${baker.id}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE" />
            </form>
            <div className="Button">
                <a href="/breads"><button>Go back to the index</button></a>
            </div>
        </Default>
    )
}

module.exports = Show