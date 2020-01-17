import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SimpleCardPhoto from './SimpleCardPhoto'
import SimpleCardPhotoSkeleton from '../../../components/photos/SimpleCardPhotoSkeleton'
import * as photosActions from '../../../actions/examples/photos.action'

function PhotoContainer({ getAllPhotos, photosReducer: { photos, loading, error } }) {
  useEffect(() => {
    if (photos.length === 0) {
      getAllPhotos()
    }
  }, [getAllPhotos, photos.length])

  if (loading) {
    return (
      <>
        {[0, 1, 2, 3, 4].map(key => (
          <SimpleCardPhotoSkeleton key={key} />
        ))}
      </>
    )
  }

  if (photos.length === 0) {
    return <div>No existen resultados</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      {photos.map(photo => (
        <SimpleCardPhoto key={photo.id} title={photo.title} text={photo.body} />
      ))}
    </>
  )
}

PhotoContainer.propTypes = {
  getAllPhotos: PropTypes.func.isRequired,
  photosReducer: PropTypes.shape({
    photos: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
}

const { getAllPhotos } = photosActions

const mapStateToProps = ({ photosReducer }) => {
  return { photosReducer }
}

const mapDispatchToProps = {
  getAllPhotos,
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer)
