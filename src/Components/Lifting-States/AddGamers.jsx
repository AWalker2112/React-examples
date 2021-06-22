
const AddGamers = ({ submitHandler, newPlayer, handleAdd }) => {
    return (
        <form onSubmit={submitHandler}>
            <input
                
                placeholder="Enter name:"
                type="text"
                onChange={newPlayer}
                
            />
            <button
                type="submit"
            
            >
                Add Player
          </button>
        </form>
    );
}

export default AddGamers;