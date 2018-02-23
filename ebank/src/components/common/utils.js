export default {
	padN:function(num, n) {
	    return (Array(n).join(0) + num).slice(-n);
	}
}