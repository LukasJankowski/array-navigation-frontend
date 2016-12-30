<script>
	export default {
		props: ['navStructure'],
		render(createElement) {
			// prevent an infinite loop from happening
			var struct = JSON.parse(JSON.stringify(this.navStructure));
			var rootElement = struct.shift();

			return this.generateElementTree(rootElement, struct, createElement);
		},
		methods: {
			/**
			 * Generate the element structure
			 */
			generateElementTree(root, struct, createElement) {
				var directChildren = this.getDirectChildren(root.id, struct);
				var children = [];
				var that = this;
				// Order the children in case the structure is shuffled
				directChildren.sort(function(a, b) {
					return a.order > b.order;
				});

				directChildren.forEach((child) => {
					children.push(that.generateElementTree(child, struct, createElement));
				});

				if (children.length !== 0) {
					return createElement(root.tag, { attrs: root.attr }, children);
				}
				// Returned in case we reach a leaf-node (ex. a link)
				var hasInner = root ? hasOwnProperty.call(root, 'inner') : false;
				return createElement(root.tag, { attrs: root.attr }, hasInner ? root.inner : null);
			},
			/**
			 * Get the direct children of the current item identified by the id parameter
			 */
			getDirectChildren(id, struct) {
				var list = [];
				struct.forEach((value) => {
					if (value.parent === id) {
						list.push(value);
					}
				});
				return list;
			}
		}
	}
</script>