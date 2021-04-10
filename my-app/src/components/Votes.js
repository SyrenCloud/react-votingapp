import React from 'react'

export const Votes = ({votes}) => {

    console.log('votes length:::', votes.length)
    if (votes.length === 0) return null

    const VoteRow = (vote,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{vote.firstName}</td>
                  <td>{vote.lastName}</td>
                  <td>{vote.email}</td>
              </tr>
          )
    }

    const voteTable = votes.map((vote,index) => VoteRow(vote,index))

    return(
        <div className="container">
            <h2>Votes</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Voter Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {voteTable}
                </tbody>
            </table>
        </div>
    )
}