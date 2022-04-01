import React from 'react'

type Props = {}

const Paginnation = (props: Props) => {
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link">&laquo;</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">&raquo;</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Paginnation