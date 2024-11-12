import apiConnection from "@/aConnection/cAPIConnection";


const factorAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    factorListAPI: builder.query({
      query: () => ({
        url: `factor/list/`,
        method: "GET"
      }),
      providesTags: ["factorList"]
    }),

    factorCreateAPI: builder.mutation({
      query: (data) => ({
        url: `factor/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["factorList"]
    }),

    factorRetrievePI: builder.query({
      query: (data) => ({
        url: `factor/retrieve/${data.params._id}`,
        method: "GET",
      })
    }),

    factorUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `factor/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: ["factorList"]
    }),

    factorDeleteAPI: builder.mutation({
      query: (data) => (
        console.log("first"), {
        url: `factor/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["factorList"]
    }),

  })
})

export default factorAPIEndpoint;
