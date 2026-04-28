/* Container for links */
.link-container {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  z-index: 10;
}

 /* Style for each link */
.link {
  padding: 12px 24px;
  border-radius: 50px;
  background-color: #333;
  color: #fff;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 10;
}

.link:hover {
  background-color: #555;
  transform: scale(1.05);
}

.link.hidden {
  display: none;
}

.link.show {
  display: block;
}
