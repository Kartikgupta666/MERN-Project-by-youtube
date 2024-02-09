import React from 'react'

export default function card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">this is some imp text.</p>
                        <div className="container w-100 ">
                            <select className='m-2 h-100 p-1    bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100 p-1 bg-success rounded'>
                                <option value="half">half</option>
                                <option value="full">full</option>

                            </select>
                            <div className="d-inline fs-5">
                                Total price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
