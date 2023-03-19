import './Pagination.scss'

interface PaginationProps {
  postsPerPage: number
  totalPosts: number
  setCurrentPage: (page: number) => void
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage
}): JSX.Element => {
  const pageNumbers = Array(Math.ceil(totalPosts / postsPerPage))
    .fill(1)
    .map((e, i) => i + 1)
  return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`page_item ${currentPage === number ? 'page_item_active' : ''}`} onClick={() => {
                          setCurrentPage(number)
                        }}
                    >
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
  )
}

export default Pagination
