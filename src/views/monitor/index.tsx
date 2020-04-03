import React, { Suspense,useCallback } from "react";
import {useMappedState} from 'redux-react-hook'

const Index = () => 
{
	const mapState = useCallback(
	state =>( {
		token:state.user.token
	}),
	[],
)
const {token} = useMappedState(mapState);
return (
		<Suspense fallback={<div>Loading...</div>}>

			<div style={{ textAlign: "center", marginTop: "5rem" }}>
				 <h2>这是一段token</h2>
				<h3>{token}</h3>
			</div>
		</Suspense>

);
}
export default Index;
