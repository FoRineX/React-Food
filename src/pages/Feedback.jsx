
export function Feedback () {
    return <> 
    <div>
        <form className="feedBackForm">
            <label className="feedBackText">WE W'D LOVE SOME FEEDBACK</label>
            <input type="text" placeholder="PUT YOUR MESSAGE HERE :)"/>
            <button className="btn snd" onClick={() => alert('Thank you!')}>SEND</button>
        </form>
    </div>
  </>
}