// add date now to the footer of the page
const DOM_dateFooter = document.querySelector('footer span');
DOM_dateFooter.innerHTML = new Date().toLocaleDateString();

// fetch the data from the api
const fetchData = async (username) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'SECRET_KEY': '3d31ff3a3d791e351f75df3f5044ff7d9f1c1db79c8dac92d0b41de618f99461'
    }
  };
  const response = await fetch(`http://irwing.ydns.eu:5000/users/${username}`, options);
  const data = await response.json();
  return data;
};

async function init() {
  const response = await fetchData('geekha');

  // add the data to the DOM
  if(response.success) {
    const DOM_courseList = document.querySelector('#courses');
    let DOM_course = ``;
    response.data.courses.forEach(course => {
      DOM_course += `
        <div class="course item">
          <img src="${course.badge}" alt="${course.title}" class="icon">
          <h3 class="name"><a href="#">${course.title}</a></h3>
          <div class="info">
            <a href="https://platzi.com${course.diploma_link}" target="_blank" class="badge certificate">
            View certficate
          </a>
          </div>
        </div>
      `;
    });
    
    // append data
    DOM_courseList.innerHTML = DOM_course;
    
    const DOM_coursesCount = document.querySelector('#counter-courses .number');
    DOM_coursesCount.innerHTML = response.data.courses.length;
  }
}
// dom loaded
document.addEventListener('DOMContentLoaded', init);
