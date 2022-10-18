import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import HogFilter from "./HogFilter";

function App() {
	const [greasedSelect, setGreasedSelect] = useState("All")
	const [pigSort, setPigSort] = useState("All")

	function greasedButtom(e) {
		setGreasedSelect(e.target.value)
	}

	function sortButton(e) {
		setPigSort(e.target.value)
	}


	const filteredHogs = hogs.filter((hog) => {
		if (greasedSelect === "All") {
			return true
		}
		else {
			return hog.greased.toString() === greasedSelect
		}
	})

	function sortArrayAlpha(a, b) {
		return a.name.localeCompare(b.name)
	}
	function sortArrayNum(a, b) {
		return a.weight - b.weight
	}

	let sortedPigs
	if (pigSort === "All") {
		sortedPigs = [...filteredHogs]
	}
	else if (pigSort === "name") {
		sortedPigs = [...filteredHogs].sort(sortArrayAlpha)
	}
	else if (pigSort === "weight") {
		sortedPigs = [...filteredHogs].sort(sortArrayNum)
	}

	return (
		<div className="App">
			<Nav />
			<HogFilter greasedButtom={greasedButtom} sortButton={sortButton} />
			<HogList hogs={sortedPigs} />
		</div>
	);
}

export default App;
