const colleges = [
  {
    rank: 1,
    name: "Harvard University",
    location: "Cambridge, Massachusetts",
    website: "https://www.harvard.edu",
    maps: "https://maps.google.com?q=Harvard+University",
    image: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg"
  },
  {
    rank: 2,
    name: "Texas A&M University",
    location: "College Station, Texas",
    website: "https://www.tamu.edu",
    maps: "https://maps.google.com?q=Texas+A%26M+University",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Texas_A%26M_University_logo.svg"
  },
  {
    rank: 3,
    name: "Bard College",
    location: "Annandale-on-Hudson, New York",
    website: "https://www.bard.edu",
    maps: "https://maps.google.com?q=Bard+College",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Bard_College_Seal.svg"
  },
  {
    rank: 4,
    name: "Centre College",
    location: "Danville, Kentucky",
    website: "https://www.centre.edu",
    maps: "https://maps.google.com?q=Centre+College+Danville+KY",
    image: "https://upload.wikimedia.org/wikipedia/en/6/63/Centre_College_seal.svg"
  },
  {
    rank: 5,
    name: "Deep Springs College",
    location: "Deep Springs, California",
    website: "https://www.deepsprings.edu",
    maps: "https://maps.google.com?q=Deep+Springs+College",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Deep_Springs_College_seal.png"
  }
];

// 2️⃣ Display the data dynamically

const collegeList = document.querySelector("#collegeList");

colleges.forEach(college => {
  const collegeHTML = `
    <div class="list-group-item college-card">
      <div class="row">
        <div class="col-2">
          <img src="${college.image}" alt="${college.name} Logo" class="college-image">
        </div>
        <div class="col-7 college-info">
          <h5>${college.rank}. ${college.name}</h5>
          <p><strong>Location:</strong> ${college.location}</p>
          <p><strong>Website:</strong> 
            <a href="${college.website}" target="_blank">${college.website}</a>
          </p>
          <p><strong>Google Maps:</strong> 
            <a href="${college.maps}" target="_blank">View on Google Maps</a>
          </p>
        </div>
      </div>
    </div>
  `;

  collegeList.insertAdjacentHTML("beforeend", collegeHTML);
});
