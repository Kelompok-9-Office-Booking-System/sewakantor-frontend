import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='my-5'>Color</h1>
				<div className='d-grid gap-3'>
					<div className='row gap-3'>
						<div className='box col bg-skSmoke text-skMidnight fw-bold p-3 fs-6'>skSmoke</div>
						<div className='box col bg-skMidnight text-skSmoke fw-bold p-3 fs-6'>skMidnight</div>
						<div className='box col bg-skBlack text-skWhite fw-bold p-3 fs-6'>skBlack</div>
					</div>
					<div className='row gap-3'>
						<div className='box col bg-skYellow text-skBlack fw-bold p-3 fs-6'>skYellow</div>
						<div className='box col bg-skWhite text-skBlack fw-bold p-3 fs-6'>skWhite</div>
						<div className='box col bg-skMischka text-skMidnight fw-bold p-3 fs-6'>skMischka</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
