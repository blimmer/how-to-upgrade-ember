export default function() {
  this.transition(
    this.toRoute(() => { return true; }),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
