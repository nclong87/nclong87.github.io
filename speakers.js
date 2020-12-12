class Speakers {
  isJoinedStage(id) {
    const speakers = this.getSpeakers();
    return speakers.indexOf(id) >= 0;
  }

  getSpeakers() {
    // console.log('Reading data from local storage...');
    const data = localStorage.getItem('speakers');
    let speakers = [];
    if (data) {
      speakers = JSON.parse(data);
    }
    return speakers;
  }

  addSpeakers(id) {
    const speakers = this.getSpeakers();
    speakers.push(id);
    localStorage.setItem('speakers', JSON.stringify(speakers));
    return speakers;
  }

  removeSpeakers(id) {
    let speakers = this.getSpeakers();
    speakers = speakers.filter(e => e !== id);
    localStorage.setItem('speakers', JSON.stringify(speakers));
    return speakers;
  }
}
