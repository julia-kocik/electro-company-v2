import React, { useEffect } from 'react'
import NavBar from '../../common/NavBar/NavBar'
import './Article.scss'

const BlogContent = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='blog_content_container'>
        <NavBar />
      <div className="blog_content_overlay">
        <article className='article_container'>
          <div className="img_container">
            <img src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Smart Home" />
          </div>
          <div className='article_content'>
            <div className='article_data'><span>Data publikacji: </span></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tristique dolor. Aenean ut justo non nulla vestibulum molestie. Aliquam scelerisque purus vitae urna placerat lobortis. Nullam semper nisi vel libero facilisis consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque rutrum leo vel turpis bibendum, id congue ex imperdiet. Duis tincidunt sollicitudin dolor, vel hendrerit sem rutrum vel. Nulla facilisi. Fusce vel est at magna rhoncus consequat. Maecenas suscipit bibendum urna, quis dapibus ipsum rutrum nec. Vivamus eu nulla ac elit sagittis blandit. Nullam vel lorem non mauris tristique posuere eget in tortor. Duis ac nisi euismod, laoreet quam vel, bibendum orci. Aenean tincidunt justo id mi imperdiet, sed suscipit orci efficitur.

  Sed laoreet eleifend justo, vel commodo augue dapibus non. Praesent vitae tortor massa. Pellentesque eu lectus at velit efficitur gravida ac eu justo. Sed id tellus eu tellus congue elementum. Sed vel justo eget magna eleifend consectetur. Nunc eget dui vitae tellus dictum bibendum eu eget sapien. Praesent nec eros fermentum, malesuada augue a, malesuada quam. Sed bibendum libero eget metus faucibus, nec molestie metus lobortis. Nulla in ultrices leo. Sed sodales turpis augue, eget molestie arcu malesuada ut. In faucibus pellentesque nibh vitae varius. Integer et tellus eu velit fermentum tincidunt. Sed nec dui enim. In eu dui a quam bibendum vehicula. Aenean semper enim quis elit vehicula, at consequat neque efficitur. Donec feugiat malesuada elit, sed aliquet elit.

  Praesent in mauris quis sapien dictum pretium. Integer rutrum ultrices tincidunt. Mauris nec mauris quam. Etiam in arcu vitae quam rhoncus gravida at eu enim. Praesent varius, turpis eget consectetur viverra, nibh mi hendrerit velit, in faucibus nisl lacus at ante. Sed vestibulum laoreet arcu quis bibendum. Duis tincidunt, lacus in luctus dignissim, purus sapien sollicitudin tortor, id dignissim neque ex non lacus. Suspendisse lobortis hendrerit turpis at suscipit. Nam euismod, mi vel egestas pretium, justo quam lobortis nunc, eu bibendum purus eros at ipsum. Etiam eget massa id arcu laoreet rhoncus. Vestibulum efficitur bibendum diam, id iaculis ante rutrum eu. Aliquam erat volutpat. Nam suscipit consequat tellus, ut varius nisl blandit sit amet. Sed tempor turpis at magna bibendum, in pharetra metus lacinia. Curabitur ut turpis diam. Nulla sit amet est in ante consequat consequat vitae et arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tristique dolor. Aenean ut justo non nulla vestibulum molestie. Aliquam scelerisque purus vitae urna placerat lobortis. Nullam semper nisi vel libero facilisis consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque rutrum leo vel turpis bibendum, id congue ex imperdiet. Duis tincidunt sollicitudin dolor, vel hendrerit sem rutrum vel. Nulla facilisi. Fusce vel est at magna rhoncus consequat. Maecenas suscipit bibendum urna, quis dapibus ipsum rutrum nec. Vivamus eu nulla ac elit sagittis blandit. Nullam vel lorem non mauris tristique posuere eget in tortor. Duis ac nisi euismod, laoreet quam vel, bibendum orci. Aenean tincidunt justo id mi imperdiet, sed suscipit orci efficitur.

  Sed laoreet eleifend justo, vel commodo augue dapibus non. Praesent vitae tortor massa. Pellentesque eu lectus at velit efficitur gravida ac eu justo. Sed id tellus eu tellus congue elementum. Sed vel justo eget magna eleifend consectetur. Nunc eget dui vitae tellus dictum bibendum eu eget sapien. Praesent nec eros fermentum, malesuada augue a, malesuada quam. Sed bibendum libero eget metus faucibus, nec molestie metus lobortis. Nulla in ultrices leo. Sed sodales turpis augue, eget molestie arcu malesuada ut. In faucibus pellentesque nibh vitae varius. Integer et tellus eu velit fermentum tincidunt. Sed nec dui enim. In eu dui a quam bibendum vehicula. Aenean semper enim quis elit vehicula, at consequat neque efficitur. Donec feugiat malesuada elit, sed aliquet elit.

  Praesent in mauris quis sapien dictum pretium. Integer rutrum ultrices tincidunt. Mauris nec mauris quam. Etiam in arcu vitae quam rhoncus gravida at eu enim. Praesent varius, turpis eget consectetur viverra, nibh mi hendrerit velit, in faucibus nisl lacus at ante. Sed vestibulum laoreet arcu quis bibendum. Duis tincidunt, lacus in luctus dignissim, purus sapien sollicitudin tortor, id dignissim neque ex non lacus. Suspendisse lobortis hendrerit turpis at suscipit. Nam euismod, mi vel egestas pretium, justo quam lobortis nunc, eu bibendum purus eros at ipsum. Etiam eget massa id arcu laoreet rhoncus. Vestibulum efficitur bibendum diam, id iaculis ante rutrum eu. Aliquam erat volutpat. Nam suscipit consequat tellus, ut varius nisl blandit sit amet. Sed tempor turpis at magna bibendum, in pharetra metus lacinia. Curabitur ut turpis diam. Nulla sit amet est in ante consequat consequat vitae et arcu.</p>

          <div className='article_social'>Udostępnij</div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogContent
